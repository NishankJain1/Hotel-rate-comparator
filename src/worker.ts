import { Worker, NativeConnection } from '@temporalio/worker';
import * as activities from './activities/supplierActivities';

async function run() {
  const nativeConnection = await NativeConnection.connect({
    address: 'temporal:7233'
  });

  const worker = await Worker.create({
    connection: nativeConnection,
    workflowsPath: require.resolve('./workflows/hotelWorkflows'),
    activities,
    taskQueue: 'hotel-task-queue'
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
