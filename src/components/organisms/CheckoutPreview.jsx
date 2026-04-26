import { useCartStore } from "../../store/cartStore";
import { useUserStore } from "../../store/userStore";

const CheckoutPreview = () => {
  const { cartItems, total, clearCart } = useCartStore();
  const currentUser = useUserStore((state) => state.currentUser);

  const handleConfirmPurchase = () => {
    alert("Compra confirmada");
    clearCart();
  };

  return (
    <section className="px-6 md:px-12 py-12 max-w-4xl mx-auto">
      <div className="mb-10">
        <h2 className="font-serif text-3xl tracking-wide text-[#1F1F1F]">
          Resumen de compra
        </h2>
        <p className="text-xs uppercase tracking-[0.25em] text-[#8A7F73] mt-1">
          Revisa tu pedido
        </p>
      </div>

      <div className="space-y-6">

        <div className="border border-[#E8E2D8] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A7F73] mb-4">
            Datos del cliente
          </p>
          {currentUser ? (
            <div className="space-y-2">
              <div className="flex justify-between items-baseline border-b border-[#E8E2D8] pb-3">
                <span className="text-xs uppercase tracking-[0.15em] text-[#8A7F73]">Nombre</span>
                <span className="font-serif text-[#1F1F1F]">{currentUser.name}</span>
              </div>
              <div className="flex justify-between items-baseline pt-1">
                <span className="text-xs uppercase tracking-[0.15em] text-[#8A7F73]">Email</span>
                <span className="text-sm text-[#6B6B6B]">{currentUser.email}</span>
              </div>
            </div>
          ) : (
            <p className="text-sm text-[#8A7F73] tracking-wide">
              No hay usuario logueado.
            </p>
          )}
        </div>

        <div className="border border-[#E8E2D8] p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A7F73] mb-4">
            Productos
          </p>
          {cartItems.length > 0 ? (
            <div className="divide-y divide-[#E8E2D8]">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-baseline py-4"
                >
                  <div>
                    <span className="font-serif text-[#1F1F1F] tracking-wide">
                      {item.name}
                    </span>
                    <span className="text-xs text-[#8A7F73] ml-2">
                      x{item.quantity}
                    </span>
                  </div>
                  <span className="text-sm text-[#6B6B6B]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#8A7F73] tracking-wide">
              Tu carrito está vacío.
            </p>
          )}
        </div>

        <div className="border-t border-[#E8E2D8] pt-6 flex justify-between items-baseline">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A7F73]">
            Total
          </p>
          <span className="font-serif text-3xl text-[#1F1F1F]">
            ${total.toFixed(2)}
          </span>
        </div>

        <div className="text-right">
          <button
            onClick={handleConfirmPurchase}
            disabled={cartItems.length === 0}
            className="px-8 py-3 text-xs uppercase tracking-[0.2em] bg-[#1F1F1F] text-white hover:bg-[#B89B72] transition duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#1F1F1F]"
          >
            Confirmar compra
          </button>
        </div>

      </div>
    </section>
  );
};

export default CheckoutPreview;