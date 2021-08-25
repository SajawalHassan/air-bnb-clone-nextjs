function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-md text-gray-800 cursor-pointer">
        <h5 className="font-bold">ABOUT</h5>
        <p className="hover:underline">How Airbnb works</p>
        <p className="hover:underline">Newsroom</p>
        <p className="hover:underline">Investors</p>
        <p className="hover:underline">Airbnb Plus</p>
        <p className="hover:underline">Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-md text-gray-800 cursor-pointer">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="hover:underline">Diversity & Belonging</p>
        <p className="hover:underline">Against Discrimination</p>
        <p className="hover:underline">Accessibility</p>
        <p className="hover:underline">Airbnb Associates</p>
        <p className="hover:underline">Frontline Stays</p>
      </div>

      <div className="space-y-4 text-md text-gray-800 cursor-pointer">
        <h5 className="font-bold">HOST</h5>
        <p className="hover:underline">Host your home</p>
        <p className="hover:underline">Host an Online Experience</p>
        <p className="hover:underline">Host an Experience</p>
        <p className="hover:underline">Responsible hosting</p>
        <p className="hover:underline">Resource Center</p>
      </div>

      <div className="space-y-4 text-md text-gray-800 cursor-pointer">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="hover:underline">Our COVID-19 Response</p>
        <p className="hover:underline">Help Center</p>
        <p className="hover:underline">Cancellation options</p>
        <p className="hover:underline">Neighborhood Support</p>
        <p className="hover:underline">Trust & Safety</p>
      </div>
    </div>
  );
}

export default Footer;
