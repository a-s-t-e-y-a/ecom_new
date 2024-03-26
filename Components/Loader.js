function Loader() {
  return (
    <div class="flex gap-2 justify-center items-center h-screen w-screen border-2">
      <div class="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-6 w-6 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div class="h-6 w-6 bg-slate-800 rounded-full animate-bounce"></div>
    </div>
  );
}
export default Loader;