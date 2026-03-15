/**
 * 图片路径管理库
 * 确保所有图片都从 speroni/ 目录加载
 */

class ImagePathManager {
  constructor() {
    this.imageBaseUrl = 'speroni/';
  }

  /**
   * 获取图片完整路径
   * @param {string} imageName - 图片文件名
   * @returns {string} 完整的图片路径
   */
  getImagePath(imageName) {
    if (!imageName) {
      console.warn('ImagePathManager: 图片名称不能为空');
      return '';
    }
    return this.imageBaseUrl + imageName;
  }

  /**
   * 批量获取图片路径
   * @param {Array<string>} imageNames - 图片文件名数组
   * @returns {Array<string>} 完整的图片路径数组
   */
  getImagePaths(imageNames) {
    if (!Array.isArray(imageNames)) {
      console.warn('ImagePathManager: 输入必须是数组');
      return [];
    }
    return imageNames.map(name => this.getImagePath(name));
  }

  /**
   * 创建带来源的图片元素
   * @param {string} imageName - 图片文件名
   * @param {Object} options - 图片选项 {alt, className, id, width, height}
   * @returns {HTMLImageElement} 图片元素
   */
  createImage(imageName, options = {}) {
    const img = document.createElement('img');
    img.src = this.getImagePath(imageName);
    img.alt = options.alt || imageName;
    
    if (options.className) img.className = options.className;
    if (options.id) img.id = options.id;
    if (options.width) img.width = options.width;
    if (options.height) img.height = options.height;
    
    return img;
  }

  /**
   * 设置元素的背景图片
   * @param {HTMLElement} element - 目标元素
   * @param {string} imageName - 图片文件名
   * @param {Object} options - 背景选项 {repeat, position, size}
   */
  setBackgroundImage(element, imageName, options = {}) {
    if (!element) {
      console.warn('ImagePathManager: 目标元素不能为空');
      return;
    }
    
    const imagePath = this.getImagePath(imageName);
    element.style.backgroundImage = `url('${imagePath}')`;
    
    if (options.repeat) element.style.backgroundRepeat = options.repeat;
    if (options.position) element.style.backgroundPosition = options.position;
    if (options.size) element.style.backgroundSize = options.size;
  }

  /**
   * 预加载图片
   * @param {string|Array<string>} imageNames - 图片文件名或数组
   * @returns {Promise<void>}
   */
  preloadImages(imageNames) {
    const names = Array.isArray(imageNames) ? imageNames : [imageNames];
    const promises = names.map(name => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = this.getImagePath(name);
      });
    });
    return Promise.all(promises);
  }

  /**
   * 验证图片是否存在
   * @param {string} imageName - 图片文件名
   * @returns {Promise<boolean>}
   */
  async imageExists(imageName) {
    try {
      const response = await fetch(this.getImagePath(imageName), { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  /**
   * 获取图片列表中的所有路径
   * @param {Array<string>} imageNames - 图片文件名数组
   * @returns {Object} 包含原始路径和完整路径的对象
   */
  getImageMap(imageNames) {
    return {
      original: imageNames,
      paths: this.getImagePaths(imageNames)
    };
  }
}

// 创建全局实例
const speroniImages = new ImagePathManager();

// 导出（支持 CommonJS 和 ES6 模块）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = speroniImages;
} else if (typeof window !== 'undefined') {
  window.speroniImages = speroniImages;
  window.ImagePathManager = ImagePathManager;
}
