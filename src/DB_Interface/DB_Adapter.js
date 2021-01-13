import { Client } from 'pg';

class DatabaseAdapter {
  constructor(props) {
    this.client = new Client(props);
  }

  async query(str) {
    if (typeof str !== 'string') {
      return console.error('this method requires a string');
    }

    const client = this.client;
    await client.connect();

    let response = await this.client
      .query(str)
      .then(res => res.rows)
      .catch(e => console.error(e.stack));

    await client.end();
    return response;
  }
}

export default DatabaseAdapter;