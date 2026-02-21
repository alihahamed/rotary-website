import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Plus, Trash2, Edit2, X, Image as ImageIcon } from "lucide-react";

export default function AdminSports() {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSport, setEditingSport] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "State Level",
    image_url: "",
  });

  const categories = [
    "National Level",
    "State Level",
    "District Level",
    "Taluk Level",
    "Inter-College",
  ];

  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("sports_achievements")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setSports(data);
    }
    setLoading(false);
  };

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingSport(item);
      setFormData({
        title: item.title,
        description: item.description || "",
        category: item.category || "State Level",
        image_url: item.image_url || "",
      });
    } else {
      setEditingSport(null);
      setFormData({
        title: "",
        description: "",
        category: "Taluk Level",
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
    const filePath = `sports/${fileName}`;

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
      if (editingSport) {
        const { error } = await supabase
          .from("sports_achievements")
          .update(formData)
          .eq("id", editingSport.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("sports_achievements")
          .insert([formData]);

        if (error) throw error;
      }

      setSuccessMessage(
        editingSport
          ? "Achievement updated successfully!"
          : "Achievement saved successfully!",
      );
      fetchSports();

      setTimeout(() => {
        setIsFormOpen(false);
        setSuccessMessage("");
      }, 1500);
    } catch (error) {
      console.error("Error saving sports achievement:", error);
      setErrorMessage("Failed to save achievement. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this achievement?")) {
      await supabase.from("sports_achievements").delete().eq("id", id);
      fetchSports();
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      {!isFormOpen && (
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 font-merri">
              Sports Achievements
            </h1>
            <p className="mt-1 text-sm text-gray-500 font-nuno">
              Manage sports teams and individual athletic achievements.
            </p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 font-nuno"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Add Achievement
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
            {sports.length === 0 ? (
              <li className="px-6 py-12 text-center text-gray-500 font-nuno">
                No achievements recorded yet. Add one to get started!
              </li>
            ) : (
              sports.map((item) => (
                <li key={item.id}>
                  <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div className="flex items-center w-full">
                        <div className="flex-shrink-0 h-16 w-24 rounded overflow-hidden bg-gray-100 mr-4 border border-gray-200 hidden sm:block">
                          {item.image_url ? (
                            <img
                              src={item.image_url}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center">
                              <ImageIcon className="h-6 w-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <div className="truncate flex-1">
                          <div className="flex text-sm">
                            <p className="font-bold text-gray-900 truncate font-merri">
                              {item.title}
                            </p>
                            <p className="ml-2 flex-shrink-0 font-normal py-0.5 px-2 bg-orange-100 text-orange-800 rounded text-xs font-nuno">
                              {item.category}
                            </p>
                          </div>
                          <div className="mt-1 text-sm text-gray-600 font-nuno truncate max-w-lg">
                            {item.description}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5 flex gap-2 justify-end">
                        <button
                          onClick={() => handleOpenModal(item)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 size={18} />
                        </button>
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
              {editingSport ? "Edit Achievement" : "Add Sports Achievement"}
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
                  placeholder="E.g., Hockey Team Runners-up"
                />
              </div>

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
                  {categories.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  placeholder="Detailed description of the achievement, team members, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Photo
                </label>
                {formData.image_url ? (
                  <div className="relative mt-2 border rounded-md p-2 bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={formData.image_url}
                        alt="Preview"
                        className="h-16 w-24 object-cover rounded shadow-sm"
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
                              htmlFor="sports-image-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                            >
                              <span>Upload a photo</span>
                              <input
                                id="sports-image-upload"
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
                            Landscape orientation preferred (PNG/JPG)
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
              {loading ? "Saving..." : "Save Achievement"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
