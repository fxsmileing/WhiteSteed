<template>
  <div class="resume-builder">
    <header class="app-header">
      <h1 class="app-title">
        <img src="./assets/logo.png" alt="logo" class="app-logo" />
        小白马简历生成器
      </h1>
      <div class="header-actions">
        <button class="export-btn" @click="exportPDF">导出PDF</button>
        <button class="export-btn export-md" @click="exportMD">导出MD</button>
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
    <div v-if="showConfirm" class="modal-mask">
      <div class="modal-container">
        <div class="modal-title">提示</div>
        <div class="modal-content">确定要重置所有内容吗？此操作不可恢复。</div>
        <div class="modal-actions">
          <button class="modal-btn" @click="onConfirm">确定</button>
          <button class="modal-btn cancel" @click="onCancel">取消</button>
        </div>
      </div>
    </div>
    <footer class="app-footer">
      <div class="footer-actions">
        <button class="export-btn" @click="exportPDF">导出PDF</button>
        <button class="export-btn export-md" @click="exportMD">导出MD</button>
        <button @click="resetForm">重置</button>
      </div>
    </footer>
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

const showConfirm = ref(false)
const onConfirm = () => {
  store.resetAll()
  resumeName.value = '未命名简历'
  showConfirm.value = false
  window.location.reload()
}
const onCancel = () => {
  showConfirm.value = false
}

const exportPDF = () => {
  const element = document.querySelector('.preview-content') as HTMLElement
  if (!element) return

  const filename = store.basicInfo.name
    ? `${store.basicInfo.name}个人简历.pdf`
    : '未填写个人简历.pdf'

  const opt = {
    margin: 1,
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }

  html2pdf().set(opt).from(element).save()
}

const exportMD = () => {
  const content = convertToMarkdown(store.$state)
  const filename = store.basicInfo.name
    ? `${store.basicInfo.name}个人简历.md`
    : '未填写个人简历.md'
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = filename
  link.click()
  URL.revokeObjectURL(link.href)
}

const resetForm = () => {
  showConfirm.value = true
}
</script>
