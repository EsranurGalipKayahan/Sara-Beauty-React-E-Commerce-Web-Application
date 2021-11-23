const Announcement = ({ message }) => {
  return (
    <div className=" row-md block mt-2 pt-4 announcement-bar justify-content-center ">
      <marquee>{message}</marquee>
    </div>
  );
};
export default Announcement;
