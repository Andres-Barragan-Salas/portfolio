import wireframeBasePng from 'PFAssets/widget/hero-base-dark.png';
import wireframeBaseWebp from 'PFAssets/widget/hero-base-dark.webp';
import wireframeWidgetPng from 'PFAssets/widget/hero-big-widget-dark.png';
import wireframeWidgetWebp from 'PFAssets/widget/hero-big-widget-dark.webp';
import wireframeHeartPng from 'PFAssets/widget/hero-heart-widget-dark.png';
import wireframeHeartWebp from 'PFAssets/widget/hero-heart-widget-dark.webp';
import wireframeNotifPng from 'PFAssets/widget/hero-notif-widget-dark.png';
import wireframeNotifWebp from 'PFAssets/widget/hero-notif-widget-dark.webp';

import './PFWireframeAnimation.css';

const PFWireframeAnimation = () => {
  return (
    <div className="wireframe-animation">
      <picture>
        <source type="image/webp" srcSet={wireframeBaseWebp} />
        <source type="image/png" srcSet={wireframeBasePng} />
        <img
          src={wireframeBasePng}
          alt="Wireframe base illustration" loading="lazy"
          className="base"
        />
      </picture>
      <picture>
        <source type="image/webp" srcSet={wireframeNotifWebp} />
        <source type="image/png" srcSet={wireframeNotifPng} />
        <img
          src={wireframeNotifPng}
          alt="Wireframe notification widget illustration" loading="lazy"
          className="widget-1 notif"
        />
      </picture>
      <picture>
        <source type="image/webp" srcSet={wireframeWidgetWebp} />
        <source type="image/png" srcSet={wireframeWidgetPng} />
        <img
          src={wireframeWidgetPng}
          alt="Wireframe big widget illustration" loading="lazy"
          className="widget-2 card-1"
        />
      </picture>
      <picture>
        <source type="image/webp" srcSet={wireframeWidgetWebp} />
        <source type="image/png" srcSet={wireframeWidgetPng} />
        <img
          src={wireframeWidgetPng}
          alt="Wireframe big widget illustration" loading="lazy"
          className="widget-2 card-2"
        />
      </picture>
      <picture>
        <source type="image/webp" srcSet={wireframeHeartWebp} />
        <source type="image/png" srcSet={wireframeHeartPng} />
        <img
          src={wireframeHeartPng}
          alt="Wireframe like widget illustration" loading="lazy"
          className="widget-1 heart"
        />
      </picture>
    </div>
  );
};

export default PFWireframeAnimation;
