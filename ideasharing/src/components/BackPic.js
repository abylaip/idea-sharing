import React from "react";

export function BackPic() {
  return (
    <>
      <style type="text/css">
        {`
            
            .yellBack {
                position: absolute;
                width: 576.03px;
                height: 767.91px;
                left: 670px;
                bottom: 120.91px;

                background: #FFEAA7;
                border-radius: 99px;
                transform: rotate(-45deg);
            }
        `}
      </style>
      <div className="yellBack"></div>
    </>
  );
}
