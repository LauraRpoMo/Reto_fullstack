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
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Resumen de Compra</h2>

      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Datos del Usuario</h3>

        {currentUser ? (
          <>
            <p><strong>Nombre:</strong> {currentUser.name}</p>
            <p><strong>Email:</strong> {currentUser.email}</p>
          </>
        ) : (
          <p>No hay usuario logueado.</p>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Productos</h3>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b py-3"
            >
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <p>Tu carrito está vacío.</p>
        )}
      </div>

      <div className="text-right">
        <h3 className="text-2xl font-bold mb-4">
          Total: ${total.toFixed(2)}
        </h3>

        <button
          onClick={handleConfirmPurchase}
          disabled={cartItems.length === 0}
          className="px-6 py-3 bg-black text-white rounded-xl disabled:opacity-50"
        >
          Confirmar Compra
        </button>
      </div>
    </section>
  );
};

export default CheckoutPreview;