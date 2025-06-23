import React, { memo } from "react";
import "./AuroraText.css"; // Import the CSS file

// We use React.memo to prevent re-renders if the props haven't changed.
// This is a good performance optimization for presentational components.
export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"], // Default colors
    speed = 1, // Default speed
  }) => {
    // This creates the inline style object for the gradient and animation speed.
    const gradientStyle = {
      // Creates a linear gradient from the colors array.
      // We add the first color to the end to make the animation loop smoothly.
      backgroundImage: `linear-gradient(135deg, ${[...colors, colors[0]].join(
        ", "
      )})`,

      // The animation duration is calculated based on the speed prop.
      animationDuration: `${10 / speed}s`,
    };

    return (
      // The main container for positioning
      <span className={`aurora-text-container ${className}`}>
        {/* This span is hidden visually but accessible to screen readers. */}
        <span className="aurora-text-accessibility">{children}</span>

        {/* This is the visible, animated text. */}
        <span
          className="aurora-text-animated"
          style={gradientStyle}
          aria-hidden="true" // Hide from screen readers since we have the accessible version above
        >
          {children}
        </span>
      </span>
    );
  }
);

// Setting the display name is good practice for debugging with React DevTools.
AuroraText.displayName = "AuroraText";

export default AuroraText;
