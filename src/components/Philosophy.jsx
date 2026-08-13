import { philosophyImages } from '../data/site'
import SplitText from '../ui/SplitText'
import Reveal from '../ui/Reveal'
import Parallax from '../ui/Parallax'
import './philosophy.css'

const principles = [
  ['Proportion first', 'A room is settled by its measurements, not its objects.'],
  ['Materials that age', 'Oak, linen, brass, stone — surfaces that improve with handling.'],
  ['Nothing spare', 'If a piece is not earning its place, it leaves before you notice it.'],
]

export default function Philosophy() {
  return (
    <section className="section phil" id="philosophy">
      <div className="wrap">
        <div className="phil__head">
          <Reveal>
            <span className="eyebrow">The Studio</span>
          </Reveal>
          <h2 className="h1 phil__statement">
            <SplitText text="A room should feel finished" />
            <SplitText text="long before it feels new." className="phil__line-2" />
          </h2>
        </div>

        <div className="phil__grid">
          <Parallax className="phil__media phil__media--tall" amount={0.1}>
            <img src={philosophyImages.tall} alt={philosophyImages.tallAlt} />
          </Parallax>

          <div className="phil__copy">
            <Reveal delay={0.05}>
              <p className="body-lg">
                Muble began in a workshop in Kent with two joiners and a
                single commission — a dining table that had to seat nine and
                survive four children. Fourteen years on, the method has not
                changed. We measure, we draw, we make, and we stay until the
                room reads as one thought.
              </p>
            </Reveal>

            <ul className="phil__list">
              {principles.map(([title, body], i) => (
                <Reveal as="li" key={title} delay={0.08 * i} className="phil__item">
                  <span className="phil__n">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="h3">{title}</h3>
                    <p className="body-sm">{body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <a className="link-under" href="#process">
                Our process
              </a>
            </Reveal>
          </div>

          <Parallax className="phil__media phil__media--wide" amount={0.08}>
            <img src={philosophyImages.wide} alt={philosophyImages.wideAlt} />
          </Parallax>
        </div>
      </div>
    </section>
  )
}
