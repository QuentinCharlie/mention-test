import clsx from "clsx";

export const getHostname = (url) => {
  return new URL(url).hostname;
};

export const highlightWord = (text, highlight, muiClasses) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part, i) => (
        <span
          key={i}
          className={clsx(
            part.toLowerCase() === highlight.toLowerCase() && muiClasses
          )}
        >
          {part}
        </span>
      ))}
    </span>
  );
};
