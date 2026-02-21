import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Plus, Trash2, Image as ImageIcon, X } from "lucide-react";

export default function AdminGallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "General",
    image_url: "",
  });

  const categories = [
    "General",
    "Orientation",
    "Sports",
    "Cultural",
    "Academic",
    "Campus",
  ];

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setPhotos(data);
    }
    setLoading(false);
  };

  const handleOpenModal = () => {
    setFormData({
      title: "",
      description: "",
      category: "General",
      image_url: "",
    });
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
    const filePath = `gallery/${fileName}`;

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

    if (!formData.image_url) {
      setErrorMessage("Please upload an image first.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from("gallery").insert([formData]);

      if (error) {
        throw error;
      }

      setSuccessMessage("Photo saved successfully!");
      setFormData({
        title: "",
        description: "",
        category: "General",
        image_url: "",
      });
      fetchPhotos();

      // Close form after a short delay so user sees success message
      setTimeout(() => {
        setIsFormOpen(false);
        setSuccessMessage("");
      }, 1500);
    } catch (error) {
      console.error("Error saving photo:", error);
      setErrorMessage("Failed to save photo. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this photo?")) {
      await supabase.from("gallery").delete().eq("id", id);
      fetchPhotos();
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto">
      {!isFormOpen && (
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 font-merri">
              Gallery Management
            </h1>
            <p className="mt-1 text-sm text-gray-500 font-nuno">
              Upload and manage photos in the public gallery.
            </p>
          </div>
          <button
            onClick={handleOpenModal}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 font-nuno"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Add Photo
          </button>
        </div>
      )}

      {loading && !isFormOpen ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : !isFormOpen && !loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {photos.length === 0 ? (
            <div className="col-span-full py-12 text-center text-gray-500 font-nuno bg-white rounded-lg border border-gray-200">
              No photos in gallery. Upload one to get started!
            </div>
          ) : (
            photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 w-full overflow-hidden h-48">
                  <img
                    src={photo.image_url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-medium text-gray-900 truncate font-merri">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-gray-500 truncate font-nuno">
                    {photo.category}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                  title="Delete Photo"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      ) : null}

      {/* Form View (Replaces List when active) */}
      {isFormOpen && (
        <div className="bg-white shadow sm:rounded-lg overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center bg-gray-50">
            <h3 className="text-lg leading-6 font-bold text-gray-900 font-merri">
              Upload New Photo
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
                  Title / Caption
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="mt-1 p-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                  placeholder="E.g., Students at the Science Fair"
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description (Optional)
                </label>
                <textarea
                  rows="2"
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
                  Image <span className="text-red-500">*</span>
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
                        <div className="flex flex-col items-center py-4">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                          <p className="text-sm text-gray-500">Uploading...</p>
                        </div>
                      ) : (
                        <>
                          <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600 justify-center">
                            <label
                              htmlFor="gallery-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="gallery-upload"
                                name="gallery-upload"
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
              disabled={loading || uploadingImage || !formData.image_url}
              className={`inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:text-sm transition-colors ${
                !formData.image_url
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              }`}
            >
              {loading ? "Saving..." : "Save Photo"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
