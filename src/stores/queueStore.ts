import {create} from "zustand";

class AsyncQueue {
  private queue: (() => Promise<void>)[];
  private isProcessing: boolean;

  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  enqueue(operation: () => Promise<void>): void {
    this.queue.push(operation);
    if (!this.isProcessing) {
      this.processQueue();
    }
  }

  private async processQueue(): Promise<void> {
    if (this.queue.length === 0) {
      this.isProcessing = false;
      return;
    }

    this.isProcessing = true;
    const operation = this.queue.shift();
    if (operation) {
      try {
        await operation();
      } catch (error) {
        console.error('Error in queued operation:', error);
      }
    }
    await this.processQueue();
  }
}

interface QueueStore {
  dataStoreQueue: AsyncQueue;
}

const useQueueStore = create<QueueStore>(set => ({
  dataStoreQueue: new AsyncQueue()
}));

export default useQueueStore;