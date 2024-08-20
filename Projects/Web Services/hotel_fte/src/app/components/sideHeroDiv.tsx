export default function SideHeroDiv() {
  return (
    <div
      className="hidden bg-cover lg:block lg:w-2/3"
      style={{
        backgroundImage:
          "url(https://assets.architecturaldigest.in/photos/65b2aecf269da4a0ee6c9b40/master/w_1600%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg)",
      }}
    >
      <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-60">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Meraki UI
          </h2>

          <p className="max-w-xl mt-3 text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem
            ipsa, nulla laboriosam dolores, repellendus perferendis libero
            suscipit nam temporibus molestiae
          </p>
        </div>
      </div>
    </div>
  );
}
