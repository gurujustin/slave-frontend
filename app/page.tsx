"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Zap } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [amount, setAmount] = useState("")
  const [volume, setVolume] = useState("")
  const [calculatedReward, setCalculatedReward] = useState<string | null>(null)
  const [calculatedRewardPer30s, setCalculatedRewardPer30s] = useState<string | null>(null)

  const calculateRewards = () => {
    const amountNum = Number.parseFloat(amount)
    const volumeNum = Number.parseFloat(volume)
    const reward = (amountNum * volumeNum) / 10000000000
    setCalculatedReward(reward.toLocaleString())
    setCalculatedRewardPer30s((reward / 2880).toLocaleString())
  }

  return (
    <main className="min-h-screen bg-black text-white p-4 bg-[url(/bg.png)] bg-center bg-cover">
      <div className="max-w-7xl mx-auto pt-12">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white drop-shadow-glow">Fast Cotton Picker</h1>
          <p className="text-2xl md:text-5xl text-white mb-12 font-bold drop-shadow-glow">
            Hold $SLAVE and earn SOL every 30 seconds
          </p>
        </div>

        <div className="flex flex-row">
          <img src="/shackles.png" alt="shackles" className="hidden md:block md:w-[300px] md:h-[380px]" />
          <div className="flex flex-col">
            {/* Main Content Grid */}
            <div className="flex flex-col lg:flex-row gap-6 mb-4">
              {/* Token Info */}
              <Card className="bg-black/50 border border-yellow-500/30 p-6 rounded">
                <h2 className="text-3xl font-bold text-[#fff29d] mb-4 drop-shadow-glow-yellow">$SLAVE TOKEN</h2>
                <p className="text-xl text-white drop-shadow-glow-text">
                  The fastest rewards token ever. Earn every 30 seconds - no staking, no locking. Just hold $SLAVE in
                  your wallet and automatically receive rewards in SOL.
                </p>
              </Card>

              {/* Buy Button */}
              <div className="flex items-center justify-center">
                <Button
                  className="w-full h-full lg:w-auto bg-[#fedd58] hover:bg-yellow-500 text-black font-bold py-6 px-8 rounded text-2xl sm:text-3xl"
                  asChild
                >
                  <Link
                    // href="https://raydium.io/swap/"
                    href="#"
                    target="_blank"
                    className="flex relative sm:flex-col items-center gap-2 uppercase"
                  >
                    <img src="/bt.png" className="absolute w-[100px] sm:w-[150px]" />
                    <span>Buy on</span>
                    <span>Raydium</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Token Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              {/* Buy Tax Box */}
              <Card className="bg-black/50 border border-yellow-500/30 p-6 gap-4 rounded flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-[#fedd58] mb-2 animate-glow">Buy Tax</h3>
                <p className="text-4xl font-bold text-[#fedd58] animate-glow">10%</p>
              </Card>

              {/* Sell Tax Box */}
              <Card className="bg-black/50 border border-yellow-500/30 p-6 gap-4 rounded flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-[#fedd58] mb-2 animate-glow">Sell Tax</h3>
                <p className="text-4xl font-bold text-[#fedd58] animate-glow">10%</p>
              </Card>

              {/* Rewards Box */}
              <Card className="bg-black/50 border border-yellow-500/30 p-6 gap-4 rounded flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-[#fedd58] mb-2 animate-glow">Rewards</h3>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-bold text-[#fedd58]">Every</p>
                  <p className="text-3xl font-bold text-[#fedd58] animate-glow">30 Seconds</p>
                </div>
              </Card>
            </div>

            {/* Calculator and Social Media Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Calculator Section */}
              <Card className="bg-black/50 border border-yellow-500/30 p-6 rounded">
                <h2 className="text-xl font-bold text-yellow mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Rewards Calculator
                </h2>
                <div className="space-y-4">
                  <Input
                    type="number"
                    placeholder="Your $SLAVE Holdings"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="bg-black/50 border-yellow-500/30 text-white placeholder:text-gray-500 rounded"
                  />
                  <Input
                    type="number"
                    placeholder="24h Volume (USD)"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="bg-black/50 border-yellow-500/30 text-white placeholder:text-gray-500 rounded"
                  />
                  <Button
                    onClick={calculateRewards}
                    disabled={amount === "" || volume === ""}
                    className="w-full bg-[#fedd58] hover:bg-yellow-500 text-black font-bold"
                  >
                    {amount === "" || volume === "" ? "Enter valid values" : "Calculate"}
                  </Button>
                  {calculatedReward && (
                    <div className="bg-black/50 border border-yellow-500/30 mt-4 p-1 text-white rounded">
                      <div className="text-center text-sm font-bold text-[#fedd58] animate-glow">
                        ${calculatedRewardPer30s} per 30s
                        <br />${calculatedReward} daily
                      </div>
                    </div>
                  )}
                </div>
              </Card>

              {/* Twitter/X Box */}
              <Card className="bg-black/50 border border-yellow-500/30 p-6 rounded flex flex-col items-center justify-center">
                <div className="mb-4">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#fedd58]" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <Button className="bg-[#fedd58] hover:bg-yellow-500 text-black font-bold px-8 py-2 rounded" asChild>
                  <Link href="https://x.com/slavetoken" target="_blank">
                    Follow on X
                  </Link>
                </Button>
              </Card>

              {/* Telegram Box */}
              <Card className="bg-black/50 border border-yellow-500/30 p-6 rounded flex flex-col items-center justify-center">
                <div className="mb-4">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#fedd58]" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z" />
                  </svg>
                </div>
                <Button className="bg-[#fedd58] hover:bg-yellow-500 text-black font-bold px-8 py-2 rounded" asChild>
                  <Link href="https://t.me/+0Q1ubOqJ9dQ5Mzk8" target="_blank">
                    Join Telegram
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

