<template>
  <div class="resume-preview">
    <div class="preview-content">
      <section class="preview-section">
        <h2>基本信息</h2>
        <div class="info-content">
          <div class="info-item">姓名：{{ store.basicInfo.name || '未填写' }}</div>
          <div class="info-item">性别：{{ store.basicInfo.gender || '未填写' }}</div>
          <div class="info-item">年龄：{{ store.basicInfo.age || '未填写' }}</div>
          <div class="info-item">手机：{{ store.basicInfo.phone || '未填写' }}</div>
          <div class="info-item">邮箱：{{ store.basicInfo.email || '未填写' }}</div>
        </div>
      </section>

      <section class="preview-section">
        <h2>求职意向</h2>
        <div class="info-content">
          <div class="info-item">期望职位：{{ store.jobIntention.position || '未填写' }}</div>
          <div class="info-item">期望城市：{{ store.jobIntention.city || '未填写' }}</div>
          <div class="info-item">期望薪资：{{ store.jobIntention.salary || '未填写' }}</div>
        </div>
      </section>

      <section class="preview-section">
        <h2>教育背景</h2>
        <div v-for="(edu, index) in store.education" :key="index" class="education-item">
          <h3>{{ edu.school || '学校名称' }}</h3>
          <div class="info-content">
            <div class="info-item">专业：{{ edu.major || '未填写' }}</div>
            <div class="info-item">学历：{{ edu.degree || '未填写' }}</div>
            <div class="info-item">在校时间：{{ edu.period || '未填写' }}</div>
          </div>
        </div>
      </section>

      <section class="preview-section">
        <h2>专业技能</h2>
        <div class="info-content">
          <div class="skill-content">{{ store.skills || '未填写' }}</div>
        </div>
      </section>

      <section class="preview-section">
        <h2>项目经验</h2>
        <div v-for="(proj, index) in store.projects" :key="index" class="project-item">
          <h3>{{ proj.name || '项目名称' }}</h3>
          <div class="info-content">
            <div class="info-item">担任角色：{{ proj.role || '未填写' }}</div>
            <div class="info-item">项目时间：{{ proj.period || '未填写' }}</div>
            <div class="info-item">项目描述：{{ proj.description || '未填写' }}</div>
            <div class="info-item">项目成果：{{ proj.achievement || '未填写' }}</div>
          </div>
        </div>
      </section>

      <section class="preview-section">
        <h2>自我评价</h2>
        <div class="info-content">
          <div class="evaluation-content">{{ store.evaluation || '未填写' }}</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from '../stores/resume'

const store = useResumeStore()
</script>

<style scoped>
.resume-preview {
  padding: 2rem;
}

.preview-content {
  max-width: 21cm;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.preview-section {
  margin-bottom: 2rem;
}

.preview-section h2 {
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.info-content {
  padding: 0.5rem 0;
}

.info-item {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.project-item,
.education-item {
  margin-bottom: 1.5rem;
}

.project-item h3,
.education-item h3 {
  color: #666;
  margin-bottom: 0.5rem;
}

.skill-content,
.evaluation-content {
  white-space: pre-wrap;
  line-height: 1.6;
}
</style>
