"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Zap } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")
  const [volume, setVolume] = useState("")
  const [calculatedReward, setCalculatedReward] = useState<string | null>(null)

  const calculateRewards = () => {
    const amountNum = Number.parseFloat(amount)
    const volumeNum = Number.parseFloat(volume)
    const reward = amountNum * volumeNum / 10000000000
    setCalculatedReward(reward.toLocaleString())
  }

  return (
    <main className="min-h-screen bg-black text-white p-4 bg-[url(/bg.png)] bg-center bg-cover">
      <div className="max-w-6xl mx-auto pt-12">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white drop-shadow-glow">
            Fast Cotton Picker
          </h1>
          <p className="text-2xl md:text-5xl text-white mb-12 font-bold drop-shadow-glow">Hold $SLAVE and earn USDC every 30 seconds</p>
        </div>

        <div className="flex flex-row">
          <img src="/shackles.png" alt="shackles" className="hidden md:block md:w-[300px]" />
          <div className="flex flex-col">
            {/* Main Content Grid */}
            <div className="flex flex-col lg:flex-row gap-6 mb-12">
              {/* Token Info */}
              <Card className="bg-black/50 border border-yellow-500/30 p-6 rounded">
                <h2 className="text-3xl font-bold text-[#fff29d] mb-4 drop-shadow-glow-yellow">$SLAVE TOKEN</h2>
                <p className="text-xl text-white drop-shadow-glow-text">
                  The fastest rewards token ever. Earn every 30 seconds - no staking, no locking. Just hold $SLAVE in your wallet
                  and automatically receive rewards in USDC.
                </p>
              </Card>

              {/* Buy Button */}
              <div className="flex items-center justify-center">
                <Button
                  className="w-full h-full lg:w-auto bg-[#fedd58] hover:bg-yellow-500 text-black font-bold py-6 px-8 rounded text-2xl sm:text-3xl"
                  asChild
                >
                  <Link href="https://raydium.io/swap/" target="_blank" className="flex sm:flex-col items-center gap-2 uppercase">
                    <span>Buy on</span>
                    <span>Raydium</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Calculator Section */}
            <Card className="bg-black/50 border border-yellow-500/30 p-6 max-w-md mx-auto rounded w-full">
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
                  disabled={amount === '' || volume === ''}
                  className="w-full bg-[#fedd58] hover:bg-yellow-500 text-black font-bold"
                >
                  {(amount === '' || volume === '') ? 'Enter valid values' : 'Calculate'}
                </Button>
                {calculatedReward && (
                  <div className="bg-black/50 border border-yellow-500/30 mt-4 p-1 text-white rounded">
                    <div className="text-center text-lg font-bold text-[#fedd58] animate-glow">${calculatedReward} daily</div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

