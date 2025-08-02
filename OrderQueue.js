class OrderQueue {
  constructor() {
    this.queue = [];
  }
  /**
   * @param {string} order_id 
   * @param {boolean} [priority=false]
   */
  add_order(order_id, priority = false) {
    if (priority) {
      this.queue.unshift(order_id); 
    } else {
      this.queue.push(order_id); 
    }
  }
  /**
   * @returns {string | undefined} 
   */
  process_next() {
    if (this.queue.length > 0) {
      return this.queue.shift(); 
    }
    return undefined;
  }

  /**
   * @returns {string[]} 
   */
  get_queue() {
    return this.queue;
  }
}
export default OrderQueue;