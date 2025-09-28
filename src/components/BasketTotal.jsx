import React from 'react'
import { Card } from 'antd';

function BasketTotal({total}) {

  return (

      <Card title="Total" variant="borderless">
        Total          {total}
      </Card>

  )
}

export default BasketTotal