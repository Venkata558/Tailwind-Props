export default function Cards({username, src, para, buttontxt = "visit!"}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-5">
      <img src={src} className="z-0 h-full w-full rounded-md object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-xxl font-semibold text-white">{username}</h1>
        <p className="mt-2 text-xl text-gray-300">{para}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-lg font-semibold  text-grey-500">
          {buttontxt} &rarr;
        </button>
      </div>
    </div>
  );
}
