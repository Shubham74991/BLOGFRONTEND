export const upload = async (data) => {
    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/blogapplication/upload', {
        method: 'POST',
        body: data,
      });
  
      const responseData = await response.json();
  
      console.log('Cloudinary Response Data:', responseData); // Add this line for debugging
  
      if (responseData.secure_url !== undefined) {
        return responseData.secure_url;
      } else {
        throw new Error('Secure URL not found in Cloudinary response');
      }
    } catch (error) {
      console.error('Error during upload:', error);
      throw error; // Rethrow the error to handle it in the calling code
    }
  };
  