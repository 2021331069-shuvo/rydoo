<h1>RYDOO – Car Rental Web Application</h1>

<p>
  RYDOO is a modern, responsive, full-stack car rental web application where users can browse, filter, and book cars seamlessly. 
  It includes a dedicated admin dashboard for managing cars and reservations with a focus on clean UI/UX and smooth booking flow.
</p>

<h2>🚗 Live Features Overview</h2>

<h3>🔹 User Features</h3>
<ul>
  <li>Browse luxury and regular vehicles with rich visuals.</li>
  <li>Advanced car search and filtering by type, price, and features.</li>
  <li>Dedicated car details page with full specifications and images.</li>
  <li>Secure and simple booking flow with clear pricing summary.</li>
  <li>View and manage personal bookings from a dedicated page.</li>
  <li>Customer testimonials section for social proof.</li>
  <li>Email subscription section for offers and updates.</li>
</ul>

<h3>🔹 Admin Features</h3>
<ul>
  <li>Dashboard with high-level analytics for cars and bookings.</li>
  <li>Add new cars with full details (images, specs, pricing).</li>
  <li>Manage existing car listings (edit / remove / update status).</li>
  <li>Update availability and pricing in real time.</li>
  <li>Manage and review user bookings.</li>
  <li>Real-time status updates for reservations (Pending / Approved / Completed).</li>
</ul>

<h2>📸 UI Screens</h2>
<p>The interface includes the following key pages:</p>
<ul>
  <li>Home Page</li>
  <li>Car Search / Listing Page</li>
  <li>Car Details Page</li>
  <li>Booking Page</li>
  <li>User Bookings Page</li>
  <li>Admin Dashboard</li>
  <li>Add Car</li>
  <li>Manage Cars</li>
  <li>Manage Bookings</li>
</ul>
<p>Uploaded screenshots in this repository visually represent these pages.</p>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React.js</li>
  <li>React Router</li>
  <li>Tailwind CSS</li>
  <li>Context API / custom state management</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB</li>
</ul>

<h2>🚀 Features in Detail</h2>

<h3>User Side</h3>
<ul>
  <li>Fully responsive homepage with featured vehicles and hero section.</li>
  <li>Smooth navigation between all pages with React Router.</li>
  <li>Clean, minimal UI for car browsing and filtering.</li>
  <li>
    Car detail page with images, price per day, and key stats 
    (power, mileage, speed, fuel, seats).
  </li>
  <li>Booking flow with date selection and clear price breakdown.</li>
  <li>
    Booking history page showing:
    thumbnail, booking dates, total price, and current status.
  </li>
</ul>

<h3>Admin Panel</h3>
<ul>
  <li>Sidebar-based navigation for all admin pages.</li>
  <li>Overview dashboard with summary of cars and bookings.</li>
  <li>Form-based interface to add new cars with validation.</li>
  <li>Table view for managing cars (edit, delete, change availability).</li>
  <li>Table view for managing bookings with status control.</li>
  <li>Status indicators such as <em>Available</em>, <em>Booked</em>, <em>Pending</em>.</li>
</ul>

<h2>📁 Project Structure</h2>

<pre>
/clients (frontend)
/server  (backend)

/clients/src
  /components
  /pages
  /assets
  /context
  App.jsx
  main.jsx

/server
  /configs
  /controllers
  /middleware
  /models
  /routes
  server.js
</pre>

<h2>⚙️ Installation &amp; Setup</h2>

<h3>1. Clone the repository</h3>
<pre>
git clone https://github.com/2021331069-shuvo/rydoo.git
</pre>

<h3>2. Setup client (frontend)</h3>
<pre>
cd rydoo/clients
npm install
npm run dev
</pre>

<h3>3. Setup server (backend)</h3>
<pre>
cd ../server
npm install
npm run dev
</pre>

<h2>📌 Future Enhancements</h2>
<ul>
  <li>Online payment integration (Stripe / SSLCOMMERZ).</li>
  <li>User authentication and role-based access (JWT / Firebase Auth).</li>
  <li>Real-time booking availability and conflict checking.</li>
  <li>Advanced analytics charts in the admin dashboard.</li>
  <li>Email / push notifications for booking updates.</li>
</ul>

<h2>🤝 Contributing</h2>
<p>
  Contributions are welcome. Fork the repository and open a pull request with improvements or new features.
</p>

<h2>👤 Author</h2>
<ul>
  <li>GitHub: <a href="https://github.com/2021331069-shuvo" target="_blank">2021331069-shuvo</a></li>
</ul>

<h2>📄 License</h2>
<p>
  This project is licensed under the MIT License.
</p>

<h2>🙌 Acknowledgements</h2>
<ul>
  <li>UI inspiration from modern car rental platforms.</li>
  <li>React + Tailwind CSS ecosystem.</li>
  <li>Open-source community and documentation.</li>
</ul>
