// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
   return (
      <div className="p-2 d-flex bg-primary-subtle">
         <Button variant="danger" className="rounded-0">
            Latest
         </Button>
         <Marquee
            pauseOnHover={true}
            gradient={true}
            gradientColor={[248, 251, 253]}
            speed={50}
            autoFill={false}
         >
            Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...
         </Marquee>
      </div>
   );
};

export default LatestNews;
