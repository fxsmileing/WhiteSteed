<template>
  <div class="resume-preview">
    <div
      class="preview-content"
      :class="`theme-${store.selectedTemplate}`"
    >
      <div class="resume-title">
        <h1>{{ store.basicInfo.name ? store.basicInfo.name + '个人简历' : '未填写个人简历' }}</h1>
      </div>

      <section class="preview-section">
        <h3>基本信息</h3>
        <div class="info-content basicInfo">
          <div class="info-item">姓名：{{ store.basicInfo.name || '未填写' }}</div>
          <div class="info-item">性别：{{ store.basicInfo.gender || '未填写' }}</div>
          <div class="info-item">年龄：{{ store.basicInfo.age || '未填写' }}</div>
          <div class="info-item">民族：{{ store.basicInfo.nation || '未填写' }}</div>
          <div class="info-item">籍贯：{{ store.basicInfo.nativePlace || '未填写' }}</div>
          <div class="info-item">政治面貌：{{ store.basicInfo.political || '未填写' }}</div>
          <div class="info-item">学历：{{ store.basicInfo.educationLevel || '未填写' }}</div>
          <div class="info-item">手机：{{ store.basicInfo.phone || '未填写' }}</div>
          <div class="info-item">邮箱：{{ store.basicInfo.email || '未填写' }}</div>
          <div class="info-item">工作年限：{{ store.basicInfo.workYears || '未填写' }}年</div>
        </div>
      </section>

      <section class="preview-section">
        <h3>求职意向</h3>
        <div class="info-content">
          <div class="info-item">期望职位：{{ store.jobIntention.position || '未填写' }}</div>
          <div class="info-item">期望城市：{{ store.jobIntention.city || '未填写' }}</div>
          <div class="info-item">期望薪资：{{ store.jobIntention.salary || '未填写' }}</div>
        </div>
      </section>

      <section class="preview-section">
        <h3>教育背景</h3>
        <div v-for="(edu, index) in store.education" :key="index" class="education-item">
          <h4>{{ edu.school || '学校名称' }}</h4>
          <div class="info-content">
            <div class="info-item">专业：{{ edu.major || '未填写' }}</div>
            <div class="info-item">学历：{{ edu.degree || '未填写' }}</div>
            <div class="info-item">在校时间：{{ edu.period || '未填写' }}</div>
          </div>
        </div>
      </section>

      <section class="preview-section">
        <h3>专业技能</h3>
        <div class="info-content">
          <div class="skill-content">{{ store.skills || '未填写' }}</div>
        </div>
      </section>

      <section class="preview-section">
        <h3>项目经验</h3>
        <div v-for="(proj, index) in store.projects" :key="index" class="project-item">
          <h4>{{ proj.name || '项目名称' }}</h4>
          <div class="info-content">
            <div class="info-item">担任角色：{{ proj.role || '未填写' }}</div>
            <div class="info-item">项目时间：{{ proj.period || '未填写' }}</div>
            <div class="info-item">项目描述：{{ proj.description || '未填写' }}</div>
            <div class="info-item">项目成果：{{ proj.achievement || '未填写' }}</div>
          </div>
        </div>
      </section>

      <section class="preview-section">
        <h3>自我评价</h3>
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
