import { Router } from 'express';
import { Connection, WorkflowClient } from '@temporalio/client';

export default function hotelsRouter() {
  const router = Router();

  router.get('/hotels', async (req, res) => {
    const city = req.query.city as string;
    if (!city) {
      return res.status(400).json({ error: 'city is required' });
    }

    try {
      // 🔧 Explicitly connect to Temporal server at temporal:7233
      const connection = await Connection.connect({
        address: 'temporal:7233'
      });

      const client = new WorkflowClient({
        connection
      });

      const handle = await client.start('hotelComparisonWorkflow', {
        args: [city],
        taskQueue: 'hotel-task-queue',
        workflowId: `workflow-${Date.now()}`
      });

      const result = await handle.result();
      res.json(result);
    } catch (err) {
      console.error('Workflow start failed', err);
      res.status(500).json({ error: 'Failed to start workflow' });
    }
  });

  return router;
}
