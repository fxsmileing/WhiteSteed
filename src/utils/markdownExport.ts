import { ResumeState } from '../stores/resume'

export function convertToMarkdown(data: ResumeState): string {
  let md = `# ${data.basicInfo.name || '未命名'}的简历\n\n`

  // 基本信息
  md += '## 基本信息\n\n'
  md += `- 姓名：${data.basicInfo.name || '未填写'}\n`
  md += `- 年龄：${data.basicInfo.age || '未填写'}\n`
  md += `- 手机：${data.basicInfo.phone || '未填写'}\n`
  md += `- 邮箱：${data.basicInfo.email || '未填写'}\n\n`

  // 求职意向
  md += '## 求职意向\n\n'
  md += `- 期望职位：${data.jobIntention.position || '未填写'}\n`
  md += `- 期望城市：${data.jobIntention.city || '未填写'}\n`
  md += `- 期望薪资：${data.jobIntention.salary || '未填写'}\n\n`

  // 教育背景
  md += '## 教育背景\n\n'
  data.education.forEach(edu => {
    md += `### ${edu.school || '学校名称'}\n`
    md += `- 专业：${edu.major || '未填写'}\n`
    md += `- 学历：${edu.degree || '未填写'}\n`
    md += `- 在校时间：${edu.period || '未填写'}\n\n`
  })

  // 专业技能
  md += '## 专业技能\n\n'
  md += `${data.skills || '未填写'}\n\n`

  // 项目经验
  md += '## 项目经验\n\n'
  data.projects.forEach(proj => {
    md += `### ${proj.name || '项目名称'}\n`
    md += `- 担任角色：${proj.role || '未填写'}\n`
    md += `- 项目时间：${proj.period || '未填写'}\n`
    md += `- 项目描述：${proj.description || '未填写'}\n`
    md += `- 项目成果：${proj.achievement || '未填写'}\n\n`
  })

  // 自我评价
  md += '## 自我评价\n\n'
  md += data.evaluation || '未填写'

  return md
}
