import { useEffect, useState } from 'react';

const useFilePreview = (initialFile = null) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(initialFile);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return { selectedFile, setSelectedFile, preview };
};

export default useFilePreview;