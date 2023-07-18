
const Footer = () => {
  const date = new Date();

  return (
    <footer className="text-gray-500 bg-black text-center text-xs pt-5 pb-3 border-t-[1px] border-[#171f38]">
      {`© Copyright ${date.getFullYear()} - Developed by Yash Varshney. All right reserved.`}
    </footer>
  );
};

export default Footer;
