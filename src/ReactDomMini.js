import ReactReconciler from 'react-reconciler';

const reconciler = ReactReconciler({
    
  supportsMutation: true,

  /**
   * 上下文信息
   */
  // 根容器上下文，只在根节点调用一次
  getRootHostContext() {},
  // 子节点上下文，每遍历一个节点都会调用一次
  getChildHostContext() {},
  
  /**
   * 创建节点实例
   */
  // 普通节点
  createInstance(
      type,
      props,
      rootContainerInstance,
      hostContext,
      internalInstanceHandle,
  ) {},
  // 文本节点
  createTextInstance(
      text,
      rootContainerInstance,
      hostContext,
      internalInstanceHandle,
  ) {},
  // 是否需要处理子文本节点，不想处理返回true(当前dom内部消化)
  shouldSetTextContent() {},

  /**
   * 节点树的构建
   */
  // 初始化节点（初始化阶段）
  appendInitialChild(parent, child) {},
  // 添加节点
  appendChild(parent, child) {},
  // 添加子节点到容器节点
  appendChildToContainer(container, child) {},
  // 插入子节点
  insertBefore(container, child, beforeChild) {},
  // 插入子节点到容器节点
  insertInContainerBefore(container, child, beforeChild) {},
  // 删除子节点
  removeChild(parent, child) {},
  // 从容器节点中删除子节点
  removeChildFromContainer(container, child) {},
  
 
  

  prepareUpdate(
      instance,
      type,
      oldProps,
      newProps,
      rootContainerInstance,
      currentHostContext,
  ) {},

  commitUpdate(
      instance,
      updatePayload,
      type,
      oldProps,
      newProps,
      finishedWork,
  ) {},
  
  
  prepareForCommit() {},
  resetAfterCommit() {},
  finalizeInitialChildren() {},
});

const MyReactDOM = {
  render(reactCom, div) {
    const container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(reactCom, container, null, null);
  }  
};

export default MyReactDOM;