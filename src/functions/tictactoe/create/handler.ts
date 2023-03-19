import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { createGame as createTicTacToe } from '../../../domain/tictactoe/index';

const create: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async event => {
  const game = createTicTacToe(event.body.gridSize);
  return formatJSONResponse({
    message: game,
    event,
  });
};

export const main = middyfy(create);
