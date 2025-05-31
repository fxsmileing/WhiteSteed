<template>
  <form class="resume-form">
    <section v-show="store.currentSection === 'basic'" class="form-section">
      <h2>基本信息</h2>
      <div class="form-group">
        <label>姓名</label>
        <input v-model="store.basicInfo.name" type="text" />
      </div>
      <div class="form-group">
        <label>性别</label>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" v-model="store.basicInfo.gender" value="男" />
            男
          </label>
          <label class="radio-label">
            <input type="radio" v-model="store.basicInfo.gender" value="女" />
            女
          </label>
        </div>
      </div>
      <div class="form-group">
        <label>年龄</label>
        <input v-model="store.basicInfo.age" type="number" name="Age" min="18" max="100" />
      </div>
      <div class="form-group">
        <label>手机</label>
        <input v-model="store.basicInfo.phone" type="tel" name="usrphone" placeholder="请输入有效的手机号码" />
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <input v-model="store.basicInfo.email" type="text" placeholder="请输入有效的邮箱地址"/>
      </div>
    </section>

    <section v-show="store.currentSection === 'intention'" class="form-section">
      <h2>求职意向</h2>
      <div class="form-group">
        <label>期望职位</label>
        <input v-model="store.jobIntention.position" type="text" />
      </div>
      <div class="form-group">
        <label>期望城市</label>
        <input v-model="store.jobIntention.city" type="text" />
      </div>
      <div class="form-group">
        <label>期望薪资</label>
        <input v-model="store.jobIntention.salary" type="text" />
      </div>
    </section>

    <section v-show="store.currentSection === 'education'" class="form-section">
      <h2>教育背景</h2>
      <div v-for="(edu, index) in store.education" :key="index" class="education-item">
        <div class="form-group">
          <label>学校名称</label>
          <input v-model="edu.school" type="text" />
        </div>
        <div class="form-group">
          <label>专业</label>
          <input v-model="edu.major" type="text" />
        </div>
        <div class="form-group">
          <label>学历</label>
          <input v-model="edu.degree" type="text" />
        </div>
        <div class="form-group">
          <label>在校时间</label>
          <input v-model="edu.period" type="text" />
        </div>
        <button type="button" @click="removeEducation(index)" v-if="store.education.length > 1">删除</button>
      </div>
      <button type="button" @click="addEducation">添加教育经历</button>
    </section>

    <section v-show="store.currentSection === 'skills'" class="form-section">
      <h2>专业技能</h2>
      <div class="form-group">
        <textarea v-model="store.skills" rows="8" placeholder="请描述您的专业技能"></textarea>
      </div>
    </section>

    <section v-show="store.currentSection === 'projects'" class="form-section">
      <h2>项目经验</h2>
      <div v-for="(proj, index) in store.projects" :key="index" class="project-item">
        <div class="form-group">
          <label>项目名称</label>
          <input v-model="proj.name" type="text" />
        </div>
        <div class="form-group">
          <label>担任角色</label>
          <input v-model="proj.role" type="text" />
        </div>
        <div class="form-group">
          <label>项目时间</label>
          <input v-model="proj.period" type="text" />
        </div>
        <div class="form-group">
          <label>项目描述</label>
          <textarea v-model="proj.description" rows="4"></textarea>
        </div>
        <div class="form-group">
          <label>项目成果</label>
          <textarea v-model="proj.achievement" rows="4"></textarea>
        </div>
        <button type="button" @click="removeProject(index)" v-if="store.projects.length > 1">删除</button>
      </div>
      <button type="button" @click="addProject">添加项目经验</button>
    </section>

    <section v-show="store.currentSection === 'evaluation'" class="form-section">
      <h2>自我评价</h2>
      <div class="form-group">
        <textarea v-model="store.evaluation" rows="8" placeholder="请进行自我评价"></textarea>
      </div>
    </section>
  </form>
</template>

<script setup lang="ts">
import { useResumeStore } from '../stores/resume'

const store = useResumeStore()

const addEducation = () => {
  store.education.push({
    school: '',
    major: '',
    degree: '',
    period: ''
  })
}

const removeEducation = (index: number) => {
  store.education.splice(index, 1)
}

const addProject = () => {
  store.projects.push({
    name: '',
    role: '',
    period: '',
    description: '',
    achievement: ''
  })
}

const removeProject = (index: number) => {
  store.projects.splice(index, 1)
}
</script>

<style scoped>
.resume-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.form-section {
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

.radio-group {
  display: flex;
  gap: 1rem;
}

.radio-label {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
}

.radio-label input[type="radio"] {
  width: auto;
  margin: 0;
}
</style>
