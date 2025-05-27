import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  return (
    <section className="absolute">
      <Sonner
        className="toaster group"
        style={{
          "--normal-bg": "var(--clr-bg-header)",
          "--normal-text": "var(--clr-text-accent)",
          "--normal-border": "var(--color-orange)",
        }}
        {...props}
      />
    </section>
  );
};

export { Toaster };
