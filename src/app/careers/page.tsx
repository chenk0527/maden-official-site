import type { Metadata } from 'next'
import { IconChart, IconPen, IconGlobe, IconBriefcase, IconCode, IconStar } from '@/components/Icons'

export const metadata: Metadata = {
  title: '加入我们 | 马登工装招聘',
  description: '马登工装校园招聘与社会招聘岗位，寻找热爱美式工装文化的你。电商运营、内容创意、视觉设计、买手等岗位开放中。',
  keywords: ['马登工装招聘', '马登工装校招', '马登工装社招', '重庆招聘'],
  alternates: { canonical: 'https://madenfushi.com/careers' },
  openGraph: {
    title: '加入我们 — 马登工装招聘',
    description: '校园招聘与社会招聘岗位开放中，欢迎投递简历。',
    url: 'https://madenfushi.com/careers',
  },
}

const CAMPUS_FORM_URL = "#campus-form"  // 后续替换为飞书表单链接
const SOCIAL_FORM_URL = "#social-form"  // 后续替换为飞书表单链接

const campusPositions = [
  { title: '电商运营培训生', dept: '市场部', location: '重庆', Icon: IconChart },
  { title: '内容创意培训生', dept: '市场部', location: '重庆', Icon: IconPen },
  { title: '供应链管理培训生', dept: '运营部', location: '重庆', Icon: IconGlobe },
]

const socialPositions = [
  { title: '天猫/抖音电商运营', dept: '市场部', location: '重庆', exp: '3-5年经验', Icon: IconChart },
  { title: '视觉设计师', dept: '市场部', location: '重庆', exp: '2-3年经验', Icon: IconStar },
  { title: '买手 / 商品企划', dept: '运营部', location: '重庆', exp: '3年以上经验', Icon: IconBriefcase },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '180px 48px 80px', textAlign: 'center' }}>
        <p className="r" style={{ fontSize: '.6rem', letterSpacing: '.5em', opacity: 0.35, marginBottom: '20px', fontWeight: 300 }}>JOIN US</p>
        <h1 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, letterSpacing: '.1em', lineHeight: 0.9, marginBottom: '32px' }}>
          加入我们
        </h1>
        <p className="r" style={{ fontSize: '.85rem', fontWeight: 200, color: 'rgba(245,237,232,.4)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
          我们在寻找热爱美式工装文化、愿意一起把品牌做好的人
        </p>
      </section>

      {/* 校园招聘 */}
      <section style={{ padding: '40px 48px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, color: '#e8391a', letterSpacing: '.08em', marginBottom: '12px' }}>
            校园招聘
          </h2>
          <p className="r" style={{ fontSize: '.75rem', fontWeight: 200, color: 'rgba(245,237,232,.3)', marginBottom: '32px', letterSpacing: '.05em' }}>
            Campus Recruitment
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {campusPositions.map(pos => (
              <div key={pos.title} className="job-card" style={{ border: '1px solid rgba(232,57,26,.15)', background: '#230808', padding: '24px 28px', transition: 'border-color .3s' }}>
                <div className="job-card-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ color: '#e8391a', opacity: 0.6, flexShrink: 0 }}>
                      <pos.Icon size={28} color="currentColor" strokeWidth={1.2} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '.95rem', fontWeight: 400, marginBottom: '6px', color: 'rgba(245,237,232,.85)' }}>{pos.title}</h3>
                      <p style={{ fontSize: '.72rem', fontWeight: 300, color: 'rgba(245,237,232,.35)' }}>
                        {pos.dept} · {pos.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <a href={CAMPUS_FORM_URL} className="apply-btn" style={{ display: 'inline-block', padding: '14px 48px', border: '1px solid #b22222', color: '#e8391a', fontSize: '.8rem', letterSpacing: '.15em', fontWeight: 300, textDecoration: 'none', transition: 'all .3s' }}>
              立即投递
            </a>
          </div>
        </div>
      </section>

      {/* 社会招聘 */}
      <section style={{ padding: '40px 48px 80px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="r" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 300, color: '#e8391a', letterSpacing: '.08em', marginBottom: '12px' }}>
            社会招聘
          </h2>
          <p className="r" style={{ fontSize: '.75rem', fontWeight: 200, color: 'rgba(245,237,232,.3)', marginBottom: '32px', letterSpacing: '.05em' }}>
            Social Recruitment
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {socialPositions.map(pos => (
              <div key={pos.title} className="job-card" style={{ border: '1px solid rgba(232,57,26,.15)', background: '#230808', padding: '24px 28px', transition: 'border-color .3s' }}>
                <div className="job-card-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ color: '#e8391a', opacity: 0.6, flexShrink: 0 }}>
                      <pos.Icon size={28} color="currentColor" strokeWidth={1.2} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '.95rem', fontWeight: 400, marginBottom: '6px', color: 'rgba(245,237,232,.85)' }}>{pos.title}</h3>
                      <p style={{ fontSize: '.72rem', fontWeight: 300, color: 'rgba(245,237,232,.35)' }}>
                        {pos.dept} · {pos.location} · {pos.exp}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <a href={SOCIAL_FORM_URL} className="apply-btn" style={{ display: 'inline-block', padding: '14px 48px', border: '1px solid #b22222', color: '#e8391a', fontSize: '.8rem', letterSpacing: '.15em', fontWeight: 300, textDecoration: 'none', transition: 'all .3s' }}>
              立即投递
            </a>
          </div>
        </div>
      </section>

      {/* 页脚信息 */}
      <section style={{ padding: '0 48px 140px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="r" style={{ background: '#230808', padding: '60px', textAlign: 'center', borderTop: '1px solid rgba(232,57,26,.15)', borderBottom: '1px solid rgba(232,57,26,.15)' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, color: '#e8391a', marginBottom: '12px', letterSpacing: '.05em' }}>
              简历投递
            </p>
            <p style={{ fontSize: '.85rem', fontWeight: 200, color: 'rgba(245,237,232,.3)', lineHeight: 1.8 }}>
              简历投递后3个工作日内回复 · service@madenfushi.com
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .job-card:hover { border-color: rgba(232,57,26,.4) !important; }
        .job-card-inner { display: flex; justify-content: space-between; align-items: center; }
        .apply-btn:hover { background: #b22222 !important; color: #0a0a0a !important; }
        @media (max-width: 900px) {
          section { padding-left: 24px !important; padding-right: 24px !important; }
          .r { text-align: center; }
        }
      `}</style>
    </>
  )
}
