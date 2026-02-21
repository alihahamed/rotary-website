import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Plus, Trash2, Edit2, X, Image as ImageIcon } from "lucide-react";

export default function AdminToppers() {
  const [toppers, setToppers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTopper, setEditingTopper] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    stream: "PCMB",
    marks: "",
    percentage: "",
    year: new Date().getFullYear().toString(),
    image_url: "",
  });

  const streams = ["PCMB", "PCMC", "PCME", "EBAC", "BSBA"];

  useEffect(() => {
    fetchToppers();
  }, []);

  const fetchToppers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("toppers")
      .select("*")
      .order("percentage", { ascending: false });

    if (!error && data) {
      setToppers(data);
    }
    setLoading(false);
  };

  const handleOpenModal = (item = null) => {
    if (item) {
      setEditingTopper(item);
      setFormData({
        name: item.name,
        stream: item.stream || "PCMB",
        marks: item.marks || "",
        percentage: item.percentage || "",
        year: item.year || new Date().getFullYear().toString(),
        image_url: item.image_url || "",
      });
    } else {
      setEditingTopper(null);
      setFormData({
        name: "",
        stream: "Science",
        marks: "",
        percentage: "",
        year: new Date().getFullYear().toString(),
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
    const filePath = `toppers/${fileName}`;

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
      // Ensure percentage is a number or null, and marks is an integer or null
      const dataToSave = {
        ...formData,
        percentage:
          formData.percentage === "" ? null : parseFloat(formData.percentage),
        marks: formData.marks === "" ? null : parseInt(formData.marks, 10),
        year: parseInt(formData.year, 10),
      };

      if (editingTopper) {
        const { error } = await supabase
          .from("toppers")
          .update(dataToSave)
          .eq("id", editingTopper.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from("toppers").insert([dataToSave]);

        if (error) throw error;
      }

      setSuccessMessage(
        editingTopper
          ? "Topper updated successfully!"
          : "Topper saved successfully!",
      );
      fetchToppers();

      setTimeout(() => {
        setIsFormOpen(false);
        setSuccessMessage("");
      }, 1500);
    } catch (error) {
      console.error("Error saving topper:", error);
      setErrorMessage("Failed to save topper. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this topper record?")) {
      await supabase.from("toppers").delete().eq("id", id);
      fetchToppers();
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      {!isFormOpen && (
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 font-merri">
              Academic Toppers
            </h1>
            <p className="mt-1 text-sm text-gray-500 font-nuno">
              Manage student academic achievements.
            </p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 font-nuno"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Add Topper
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
            {toppers.length === 0 ? (
              <li className="px-6 py-12 text-center text-gray-500 font-nuno">
                No toppers recorded yet. Add one to get started!
              </li>
            ) : (
              toppers.map((item) => (
                <li key={item.id}>
                  <div className="px-4 py-4 flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100 mr-4 border border-gray-200">
                          {item.image_url ? (
                            <img
                              src={item.image_url}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <ImageIcon className="h-6 w-6 text-gray-400 m-3" />
                          )}
                        </div>
                        <div className="truncate">
                          <div className="flex text-sm">
                            <p className="font-bold text-gray-900 truncate font-merri">
                              {item.name}
                            </p>
                            <p className="ml-2 flex-shrink-0 font-normal text-gray-500 font-nuno">
                              ({item.stream})
                            </p>
                          </div>
                          <div className="mt-1 flex items-center gap-4 text-sm text-gray-600 font-nuno">
                            <span>
                              Marks:{" "}
                              <strong className="text-blue-600">
                                {item.marks}
                              </strong>
                            </span>
                            <span>
                              Percentage:{" "}
                              <strong className="text-blue-600">
                                {item.percentage}%
                              </strong>
                            </span>
                            <span>Year: {item.year}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5 flex gap-2">
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
              {editingTopper ? "Edit Topper" : "Add Academic Topper"}
            </h3>
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form Body */}
          <div className="px-4 py-5 sm:p-6 bg-white border border-gray-200 shadow-sm sm:rounded-b-lg">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md uppercase"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Stream
                  </label>
                  <select
                    value={formData.stream}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        stream: e.target.value,
                      })
                    }
                    className="mt-1 p-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {streams.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Marks (e.g., 580/600)
                  </label>
                  <input
                    type="text"
                    value={formData.marks}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        marks: e.target.value,
                      })
                    }
                    className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Percentage (%)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.percentage}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        percentage: e.target.value,
                      })
                    }
                    className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Academic Year
                  </label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student Photo
                </label>
                {formData.image_url ? (
                  <div className="relative mt-2 border rounded-md p-2 bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={formData.image_url}
                        alt="Preview"
                        className="h-16 w-12 object-cover rounded shadow-sm"
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
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500"
                            >
                              <span>Upload a photo</span>
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
                            Vertical orientation preferred (PNG/JPG)
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
              {loading ? "Saving..." : "Save Topper"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
