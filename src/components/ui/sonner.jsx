import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  return (
    <section className="absolute">
      <Sonner className="toaster group" {...props} />
    </section>
  );
};

export { Toaster };
