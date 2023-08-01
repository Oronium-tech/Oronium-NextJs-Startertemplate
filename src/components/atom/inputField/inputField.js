export default function InputField({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className="txt text-md focus:border-primary-color border-spacing-2 text-black-color px-3 border-1 outline-none border-gray-300  w-full p-2 rounded-md "
    />
  );
}