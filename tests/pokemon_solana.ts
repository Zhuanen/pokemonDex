import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PokemonSolana } from "../target/types/pokemon_solana";

describe("pokemon_solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.PokemonSolana as Program<PokemonSolana>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
