const Announcement = ({ message }) => {
  return (
    <div className="row-md block pt-16  ">
    <div className="row-md block pb-2 pt-2 announcement-bar justify-content-center ">
      <marquee>{message}</marquee>
      </div>
      </div>
  );
};
export default Announcement;
