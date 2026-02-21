import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Plus, Edit2, Trash2, X, Image as ImageIcon } from "lucide-react";

export default function AdminNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Academic",
    event_date: new Date().toISOString().split("T")[0],
    image_url: "",
  });

  const categories = [
    "Academic",
    "Infrastructure",
    "Sports",
    "Career",
    "Anniversary",
    "Community",
    "College Life",
  ];

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("news_events")
      .select("*")
      .order("event_date", { ascending: false });

    if (!error && data) {
      setNews(data);
    }
    setLoading(false);
  };

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingNews(item);
      setFormData({
        title: item.title,
        description: item.description || "",
        category: item.category || "Academic",
        event_date: item.event_date || new Date().toISOString().split("T")[0],
        image_url: item.image_url || "",
      });
    } else {
      setEditingNews(null);
      setFormData({
        title: "",
        description: "",
        category: "Academic",
        event_date: new Date().toISOString().split("T")[0],
        image_url: "",
      });
    }
    setSuccessMessage("");
    setErrorMessage("");
    setIsFormOpen(true);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `news/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("cms-uploads")
      .upload(filePath, file);

    if (uploadError) {
      console.error("Error uploading image:", uploadError);
      alert("Error uploading image");
    } else {
      const { data } = supabase.storage
        .from("cms-uploads")
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: data.publicUrl });
    }
    setUploadingImage(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    try {
      if (editingNews) {
        const { error } = await supabase
          .from("news_events")
          .update(formData)
          .eq("id", editingNews.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("news_events").insert([formData]);

        if (error) throw error;
      }

      setSuccessMessage(
        editingNews ? "News updated successfully!" : "News saved successfully!",
      );
      fetchNews();

      setTimeout(() => {
        setIsFormOpen(false);
        setSuccessMessage("");
      }, 1500);
    } catch (error) {
      console.error("Error saving news:", error);
      setErrorMessage("Failed to save news. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this news item?")) {
      await supabase.from("news_events").delete().eq("id", id);
      fetchNews();
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      {!isFormOpen && (
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 font-merri">
              News & Events
            </h1>
            <p className="mt-1 text-sm text-gray-500 font-nuno">
              Manage latest news, announcements, and upcoming events.
            </p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 font-nuno"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Add News Item
          </button>
        </div>
      )}

      {loading && !isFormOpen ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : !isFormOpen && !loading ? (
        <div className="bg-white shadow overflow-hidden sm:rounded-md border border-gray-200">
          <ul className="divide-y divide-gray-200">
            {news.length === 0 ? (
              <li className="px-6 py-12 text-center text-gray-500 font-nuno">
                No news items found. Create one to get started!
              </li>
            ) : (
              news.map((item) => (
                <li key={item.id}>
                  <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div className="truncate">
                        <div className="flex text-sm">
                          <p className="font-medium text-blue-600 truncate font-merri">
                            {item.title}
                          </p>
                          <p className="ml-1 flex-shrink-0 font-normal text-gray-500 font-nuno">
                            in {item.category}
                          </p>
                        </div>
                        <div className="mt-2 flex">
                          <div className="flex items-center text-sm text-gray-500 font-nuno">
                            <span className="truncate">
                              {item.description?.substring(0, 100)}
                              {item.description?.length > 100 ? "..." : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5 flex flex-col gap-2 items-end">
                        <p className="text-sm text-gray-900 font-nuno">
                          {formatDate(item.event_date)}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleOpenModal(item)}
                            className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-1 text-red-600 hover:bg-red-50 rounded"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : null}

      {/* Form View (Replaces List when active) */}
      {isFormOpen && (
        <div className="bg-white shadow sm:rounded-lg overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center bg-gray-50">
            <h3 className="text-lg leading-6 font-bold text-gray-900 font-merri">
              {editingNews ? "Edit News Item" : "Create News Item"}
            </h3>
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form Body */}
          <div className="px-4 py-5 sm:p-6 bg-white">
            {successMessage && (
              <div
                className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}
            {errorMessage && (
              <div
                className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{errorMessage}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4 font-nuno">
              {" "}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value,
                      })
                    }
                    className="mt-1 p-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.event_date}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        event_date: e.target.value,
                      })
                    }
                    className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows="4"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Featured Image
                </label>
                {formData.image_url ? (
                  <div className="relative mt-2 border rounded-md p-2 bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={formData.image_url}
                        alt="Preview"
                        className="h-16 w-16 object-cover rounded shadow-sm"
                      />
                      <span className="text-sm text-green-600 font-medium font-nuno">
                        Image uploaded successfully!
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, image_url: "" })
                      }
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded text-sm font-medium transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md relative hover:bg-gray-50 transition-colors">
                    <div className="space-y-1 text-center">
                      {uploadingImage ? (
                        <div className="flex flex-col items-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                          <p className="text-sm text-gray-500">Uploading...</p>
                        </div>
                      ) : (
                        <>
                          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600 justify-center">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                accept="image/*"
                                onChange={handleImageUpload}
                                disabled={uploadingImage}
                              />
                            </label>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, WEBP up to 5MB
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Form Footer */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end gap-3 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading || uploadingImage}
              className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
            >
              {loading ? "Saving..." : "Save News"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
