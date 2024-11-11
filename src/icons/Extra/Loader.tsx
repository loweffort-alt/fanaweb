const SpinnerIcon = () => (
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <svg
      viewBox="0 0 20 20"
      width="40"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        animation: 'spin8932 0.5s infinite linear',
        transformOrigin: '50% 50%',
      }}
    >
      <defs>
        <linearGradient id="RadialGradient8932">
          <stop offset="0%" stopColor="#090606" stopOpacity="1" />
          <stop offset="100%" stopColor="#0B3B51" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <style>{`
      @keyframes spin8932 {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
      <circle
        cx="10"
        cy="10"
        r="8"
        id="circle8932"
        strokeWidth="2"
        stroke="url(#RadialGradient8932)"
        fill="none"
      />
    </svg>
  </div>
);

export default SpinnerIcon;

