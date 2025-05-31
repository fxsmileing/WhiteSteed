<template>
  <div class="resume-builder">
    <header class="app-header">
      <div class="resume-title">
        <input v-model="resumeName" placeholder="未命名简历" />
      </div>
      <h1 class="app-title">小白简历生成器</h1>
      <div class="header-actions">
        <div class="dropdown">
          <button class="dropdown-toggle">导出 ▼</button>
          <div class="dropdown-menu">
            <button @click="exportPDF">导出PDF</button>
            <button @click="exportMD">导出.md</button>
          </div>
        </div>
        <button @click="resetForm">重置</button>
      </div>
    </header>
    <main class="app-main">
      <nav class="side-nav">
        <ResumeControls />
      </nav>
      <section class="form-section">
        <ResumeForm />
      </section>
      <section class="preview-section">
        <ResumePreview />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2pdf from 'html2pdf.js'
import ResumeControls from './components/ResumeControls.vue'
import ResumeForm from './components/ResumeForm.vue'
import ResumePreview from './components/ResumePreview.vue'
import { useResumeStore } from './stores/resume'
import { convertToMarkdown } from './utils/markdownExport'

const resumeName = ref('未命名简历')
const store = useResumeStore()

const exportPDF = () => {
  const element = document.querySelector('.preview-content') as HTMLElement
  if (!element) return
  
  const opt = {
    margin: 1,
    filename: `${resumeName.value || '未命名简历'}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }

  html2pdf().set(opt).from(element).save()
}

const exportMD = () => {
  const content = convertToMarkdown(store.$state)
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `${resumeName.value || '未命名简历'}.md`
  link.click()
  URL.revokeObjectURL(link.href)
}

const resetForm = () => {
  if (confirm('确定要重置所有内容吗？此操作不可恢复。')) {
    store.resetAll()
    resumeName.value = '未命名简历'
    window.location.reload()
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
.resume-builder {
  display: flex;
  flex-direction: column;
}

.app-header {
  display: flex;
  align-items: center;
  padding:0 2rem 0 2rem;
  height: 3rem;
  backdrop-filter: blur(10px);
  background: rgba(0, 85, 47, 0.06);
  box-shadow: 0 0.5rem 0.5rem -0.5rem rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.resume-title {
  flex: 1;
}

.app-title {
  flex: 2;
  text-align: center;
  font-size: 1.2rem;
}

.header-actions {
  flex: 1;
  text-align: right;
}

.app-main {
  flex: 1;
  display: flex;
  overflow: hidden;
  margin-top: 2.4rem;
}

.side-nav {
  width: 250px;
  border-right: 1px solid #eee;
  background-image: linear-gradient(to bottom, rgba(78, 208, 254, 0.3), rgba(185, 0, 186, 0.4));
}

.form-section {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.preview-section {
  width: 50%;
  border-left: 1px solid #eee;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
    justify-content: center;
  gap: 0.25rem;
  width: 6rem;
  background-color: #1890ff;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
}

.header-actions > button:last-child {
  width: 5rem;
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  margin-left: 1rem;
}

.dropdown-menu {
width: 6rem;
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  z-index: 1000;
}

.dropdown-menu button {
  display: block;
  width: 6rem;
  padding: 0.5rem 1rem;
  text-align: center;
  border: none;
  background: none;
  cursor: pointer;
}

.dropdown-menu button:hover {
  background-color: #f5f5f5;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

@media (max-width: 1024px) {
  .preview-section {
    display: none;
  }
}

@media (max-width: 768px) {
  .side-nav {
    display: none;
  }
}
</style>
