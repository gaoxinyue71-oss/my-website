'use client'

import { useState, useEffect } from 'react'

const skills = [
  {
    icon: '📊',
    title: '品类运营',
    desc: '主导京东母婴孕产服饰品类，核心类目同比增长10%+（行业双位数下滑背景下），自营连续三季度增长30%+',
  },
  {
    icon: '👗',
    title: '时装买手',
    desc: '10年+专业买手经验，深耕绫致时装（BESTSELLER集团），精通流行趋势分析与产品开发全流程管理',
  },
  {
    icon: '🔗',
    title: '供应链管理',
    desc: '统筹1400+ SPU年度开发，全年下单125万件，熟悉PLM/SCM系统，建立快反供应商体系',
  },
  {
    icon: '🚀',
    title: '商家赋能',
    desc: '构建团长运营体系，标杆商家GMV同比增长693%，中腰部商家贡献度提升7.2%',
  },
  {
    icon: '📈',
    title: '数据驱动',
    desc: '建立三维选品模型，精准锁定高潜力款；推行SKU末位淘汰制，单SKU坑产提升40%',
  },
  {
    icon: '🌐',
    title: '英语CET-6',
    desc: '熟练听说读写，具备国际化品牌工作经验，熟悉国际时装行业工作语言与规范',
  },
]

const experiences = [
  {
    company: '北京京东世纪贸易有限公司',
    title: '采销经理',
    dept: '母婴业务部',
    period: '2023.06 — 至今',
    location: '北京',
    achievements: [
      '主导孕产服饰品类运营，实现核心类目同比增长 10%+（行业呈双位数下滑）',
      '自营核心类目连续三季度实现 30%+ 增长，POP 业务增长 5%，拉动平台市占率提升',
      '3个月内将站外渠道销售占比从 13% 提升至 30%，从0到1搭建完整团长运营体系',
      '推行SKU末位淘汰制，精简低效SKU 25%，单SKU坑产提升40%，综合毛利率提升0.42pp',
      '主导20+核心供应商合同谈判，优化结算方式，提升资金周转效率',
      '培育标杆白牌商家日销从3千突破至2万+，月销突破43万，GMV同比增长693%',
    ],
  },
  {
    company: '绫致时装（天津）有限公司',
    title: '买手经理 / 高级买手',
    dept: '买手业务部',
    period: '2010.03 — 2023.04',
    location: '北京',
    achievements: [
      '从实习买手成长为产品经理，统筹负责针织品类货盘管理，带领10+人买手团队',
      '全年统筹超1400 SPU开发与下单，全年下单量约125万件',
      '针织品类质检通过率提升7%，利润倍率提升3%；毛衣品类质检通过率提升22%',
      '2022年双十一，毛衣品类在公司所有品牌中销售排名第13，翻单款占比达35%+',
      '建立完整快反供应链体系：T恤翻单最短9天出货，毛衣最短13天出货',
      '主导印花价格标准体系建设，成果获采购部门认可并持续沿用至今',
    ],
  },
]

const projects = [
  {
    title: '更新T恤面料项目',
    period: '2021.10 — 2021.12',
    role: '项目负责人',
    background: '市场高端品牌开始使用厚棉面料，公司决定对原有面料进行升级优化，提升品牌T恤的品质感与竞争力。',
    result: '筛选出多款升级面料，其中最具性价比的系列持续沿用至今，翻单不断。',
    tags: ['面料开发', '供应链', '成本优化'],
  },
  {
    title: '快速翻单时间改进项目',
    period: '2021.06 — 2021.10',
    role: '项目负责人',
    background: '原有供应商无法满足快节奏开发需求，需引入新供应商资源以提升供应链整体反应速度。',
    result: '评估30+家候选供应商，成功引入5家优质供应商合作至今，显著提升快反速度，增强产品竞争力。',
    tags: ['供应商开发', '快反体系', '项目管理'],
  },
  {
    title: '印花价格标准制定',
    period: '2019.11 — 2019.12',
    role: '项目负责人',
    background: '原有报价体系不够精细，需建立更精确的成本评估标准，以支撑采购决策，提升核价精准度。',
    result: '深入工厂实地调研，设计细分拆分定价标准，获采购部门认可并持续执行至今。',
    tags: ['成本管理', '标准化建设', '供应链'],
  },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-white font-bold text-lg">高新越</span>
          <div className="hidden md:flex gap-8 text-sm">
            {[
              ['#about', '核心优势'],
              ['#experience', '工作经历'],
              ['#projects', '项目经历'],
              ['#education', '教育背景'],
              ['#contact', '联系我'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        {/* ── Hero ── */}
        <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto px-6 py-32 relative z-10 w-full">
            <div className="max-w-3xl">
              <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
                采销经理 · 时装买手
              </p>
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
                高新越
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl">
                互联网电商运营 + 时装产品买手双背景，10年+专业买手经验。
                深耕京东孕产服饰品类运营，擅长品类增长策略、商家赋能与供应链精细化管理，
                善于在复杂市场环境下寻找增量机会。
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { num: '10年+', label: '时装买手经验' },
                  { num: '693%', label: '标杆商家GMV增长' },
                  { num: '1400+', label: '年度SPU开发' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="text-center border border-slate-700 rounded-xl p-4 bg-slate-800/40"
                  >
                    <div className="text-3xl font-bold text-amber-400">{m.num}</div>
                    <div className="text-slate-400 text-sm mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-wrap gap-6 text-slate-400 text-sm mb-8">
                <span>📍 北京</span>
                <a
                  href="mailto:gaoxinyue71@hotmail.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  ✉️ gaoxinyue71@hotmail.com
                </a>
                <span>📱 151-0114-9001</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#experience"
                  className="px-8 py-3 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-all hover:scale-105"
                >
                  查看工作经历
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-amber-400 hover:text-amber-400 transition-all"
                >
                  联系我
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Skills ── */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-2">
                STRENGTHS
              </p>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">核心优势</h2>
              <div className="w-16 h-1 bg-amber-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="p-6 rounded-2xl border border-slate-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <div className="text-3xl mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3">{skill.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-2">
                EXPERIENCE
              </p>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">工作经历</h2>
              <div className="w-16 h-1 bg-amber-500" />
            </div>

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-amber-400 font-medium mt-1">{exp.company}</p>
                        <p className="text-slate-400 text-sm mt-1">{exp.dept}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-amber-500/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                        <p className="text-slate-400 text-sm mt-2">📍 {exp.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {exp.achievements.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                          <span className="text-amber-500 mt-0.5 flex-shrink-0">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-2">
                PROJECTS
              </p>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">项目经历</h2>
              <div className="w-16 h-1 bg-amber-500" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-amber-100 text-sm mt-1">
                      {project.role} · {project.period}
                    </p>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                        背景
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">{project.background}</p>
                    </div>
                    <div className="mb-4 flex-1">
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">
                        成果
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">{project.result}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-amber-500 text-sm font-medium tracking-widest uppercase mb-2">
                EDUCATION
              </p>
              <h2 className="text-4xl font-bold text-slate-800 mb-4">教育背景</h2>
              <div className="w-16 h-1 bg-amber-500" />
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-wrap gap-8 items-center">
              <div className="flex-1 min-w-[160px]">
                <h3 className="text-2xl font-bold text-slate-800">东北林业大学</h3>
                <p className="text-amber-500 font-medium mt-1">211 重点院校</p>
              </div>
              <div className="flex-1 min-w-[120px]">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">专业</p>
                <p className="text-slate-800 font-semibold text-lg">市场营销</p>
              </div>
              <div className="flex-1 min-w-[120px]">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">学历</p>
                <p className="text-slate-800 font-semibold text-lg">本科（学士学位）</p>
              </div>
              <div className="flex-1 min-w-[160px]">
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">在读时间</p>
                <p className="text-slate-800 font-semibold text-lg">2006.09 — 2010.07</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact / Footer ── */}
        <section id="contact" className="py-24 bg-slate-900">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
              CONTACT
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">联系我</h2>
            <p className="text-slate-400 mb-12 text-lg">期待与您交流，探讨合作可能</p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:gaoxinyue71@hotmail.com"
                className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl transition-all hover:scale-105"
              >
                <span className="text-2xl">✉️</span>
                <div className="text-left">
                  <p className="text-slate-400 text-xs">邮箱</p>
                  <p className="font-medium">gaoxinyue71@hotmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl">
                <span className="text-2xl">📱</span>
                <div className="text-left">
                  <p className="text-slate-400 text-xs">电话</p>
                  <p className="font-medium">151-0114-9001</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-xl">
                <span className="text-2xl">📍</span>
                <div className="text-left">
                  <p className="text-slate-400 text-xs">求职地点</p>
                  <p className="font-medium">北京</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800 text-slate-600 text-sm">
              © 2025 高新越 · 采销经理 · 时装买手
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
