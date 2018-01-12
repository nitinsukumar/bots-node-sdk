import * as util from './util/';
import { IApproximateTextMatch } from './util/textUtil';

/**
 * Util module encapsulating various utility methods, classes, etc.
 *
 * ```javascript
 * import { Util } from '@oracle/bots-js-sdk';
 * // or
 * import * as Util from '@oracle/bots-js-sdk/util';
 * ```
 */
export namespace Util {

  /**
   * MessageModel is a set of utility functions to help deriving string or speech representation
   * of a CMM (Conversation Message Model) message.  This is used primarily to output text or speech to
   * voice and text-based channels like Alexa and SMS.
   * @alias `messageModelUtil`
   */
  export const MessageModel = {
    cardToText: util.messageModelUtil.cardToText,
    convertRespToText: util.messageModelUtil.convertRespToText,
  };
  export import messageModelUtil = util.messageModelUtil; // preferred, but not picked up by TypeDoc.

  /**
   * Webhook is a set of utility functions for bot integration via webhook channel.
   * @alias `webhoookUtil`
   */
  export const Webhook = {
    messageToBot: util.webhookUtil.messageToBot,
    messageToBotWithProperties: util.webhookUtil.messageToBotWithProperties,
    verifyMessageFromBot: util.webhookUtil.messageToBotWithProperties,
    // bodyParserRawMessageVerify, ==> intentionally omitted
  };
  export import webhoookUtil = util.webhookUtil; // preferred, but not picked up by TypeDoc.

  /**
   * Text is a set of text-based utiltiies for bot message processing.
   * @alias `textUtil`
   */
  export const Text = {
    approxTextMatch: util.textUtil.approxTextMatch,
  };
  export import textUtil = util.textUtil; // preferred, but not picked up by TypeDoc.
}
