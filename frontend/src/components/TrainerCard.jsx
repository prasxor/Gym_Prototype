export default function ProfileCard({ img, name, job,imgPosition }) {
  return (
    <div className="w-full max-w-sm h-120 rounded-3xl border overflow-hidden">
      <div floated={false} className="h-[80%] overflow-hidden">
        <img
          src={img}
          className={`w-full ${imgPosition} rounded-tr-3xl rounded-tl-3xl"
          alt="profile-picture`}
        />
      </div>
      <div className="text-center border border-gray-600 bg-white text-black h-25 flex items-center justify-center flex-col  rounded-br-3xl rounded-bl-3xl">
        <p color="blue-gray" className="mb-1 text-2xl font-semibold">
          {name}
        </p>
        <p color="blue-gray" className="font-medium" textGradient>
          {job}
        </p>
      </div>
    </div>
  );
}
