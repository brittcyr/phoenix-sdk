/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";
import {
  CancelUpToParams,
  cancelUpToParamsBeet,
} from "../types/CancelUpToParams";

/**
 * @category Instructions
 * @category CancelUpToWithFreeFunds
 * @category generated
 */
export const CancelUpToWithFreeFundsStruct = new beet.FixableBeetArgsStruct<{
  instructionDiscriminator: number;
  params: CancelUpToParams;
}>(
  [
    ["instructionDiscriminator", beet.u8],
    ["params", cancelUpToParamsBeet],
  ],
  "CancelUpToWithFreeFundsInstructionArgs"
);
/**
 * Accounts required by the _CancelUpToWithFreeFunds_ instruction
 *
 * @property [] phoenixProgram Phoenix program
 * @property [] logAuthority Phoenix log authority
 * @property [_writable_] market This account holds the market state
 * @property [_writable_, **signer**] trader
 * @category Instructions
 * @category CancelUpToWithFreeFunds
 * @category generated
 */
export type CancelUpToWithFreeFundsInstructionAccounts = {
  phoenixProgram: web3.PublicKey;
  logAuthority: web3.PublicKey;
  market: web3.PublicKey;
  trader: web3.PublicKey;
};

export const cancelUpToWithFreeFundsInstructionDiscriminator = 9;

/**
 * Creates a _CancelUpToWithFreeFunds_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CancelUpToWithFreeFunds
 * @category generated
 */
export function createCancelUpToWithFreeFundsInstruction(
  accounts: CancelUpToWithFreeFundsInstructionAccounts,
  params: CancelUpToParams,
  programId = new web3.PublicKey("phnxNHfGNVjpVVuHkceK3MgwZ1bW25ijfWACKhVFbBH")
) {
  const [data] = CancelUpToWithFreeFundsStruct.serialize({
    instructionDiscriminator: cancelUpToWithFreeFundsInstructionDiscriminator,
    params,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.phoenixProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.logAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.market,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.trader,
      isWritable: true,
      isSigner: true,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
