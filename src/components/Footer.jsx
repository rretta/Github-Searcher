import rretta from "../assets/images/rretta.webp";
export const Footer = () => {
  return (
    <footer className="footer bg-gray-800  p-4 items-center justify-center  p-4  rounded-sm text-neutral-content">
      <aside className="items-center grid-flow-col">
        <a href="https://rretta.dev/" target="_blank">
          <img
            src={rretta}
            alt="rretta"
            className="
        w-10 h-10 rounded-full"
          />
        </a>
        <p>
          <span className="font-bold">RRETTA © 2024</span> - Desarrollado con 💚
          y 🧉
        </p>
      </aside>
    </footer>
  );
};
