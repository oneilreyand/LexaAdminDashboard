import { useState, useRef } from "react";
import Button from "../atoms/Button";
import useSnackbar from "../../hooks/useSnackbar";

function ProfileUpload() {
  const { showSuccess, showError } = useSnackbar();
  const [avatarUrl, setAvatarUrl] = useState("https://i.pravatar.cc/100");
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        showError("Invalid file type. Please upload JPG, PNG, or GIF images.");
        return;
      }
      if (file.size > 800 * 1024) {
        showError("File too large. Please upload an image smaller than 800KB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarUrl(e.target.result);
        showSuccess("Your profile photo has been updated successfully.");
        event.target.value = ''; // Reset the input to allow re-selecting the same file
      };
      reader.readAsDataURL(file);
    }
  };

  const defaultAvatarUrl = "https://i.pravatar.cc/100";

  const handleReset = () => {
    setAvatarUrl(defaultAvatarUrl);
    showSuccess("Your profile photo has been reset to default.");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        showError("Invalid file type. Please upload JPG, PNG, or GIF images.");
        return;
      }
      if (file.size > 800 * 1024) {
        showError("File too large. Please upload an image smaller than 800KB.");
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-row items-center gap-6">
      <div
        className={`border-4 ${isDragOver ? 'border-blue-500' : 'border-gray-200'} rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer relative`}
        style={{ height: '100px', width: '100px' }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <img src={avatarUrl} alt="Profile photo" className="h-full w-full object-cover" />
        {isDragOver && (
          <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">Drop here</span>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          <Button size="small" className="relative overflow-hidden" onClick={() => fileInputRef.current?.click()}>
          Upload new photo
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/jpg,image/png,image/gif"
              onChange={handleFileUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </Button>
          <Button size="small" variant="secondary" styleType="outline" onClick={handleReset}>
            Reset
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Allowed JPG, GIF or PNG. Max size of 800K
        </p>
      </div>
    </div>
  );
}

export default ProfileUpload;
