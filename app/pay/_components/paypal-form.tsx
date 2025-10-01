"use client"

import { useState } from "react"
import { PayPalScriptProvider, PayPalButtons, type OnApproveData, type CreateOrderData } from "@paypal/react-paypal-js"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal, AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import type { PaypalFormProps } from "@/types/paypal-form-props"

export default function PaypalForm({ paypalClientId }: PaypalFormProps) {
  const [amount, setAmount] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error" | "info"; text: string } | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const createOrder = (data: CreateOrderData, actions: any) => {
    if (!amount || Number.parseFloat(amount) <= 0) {
      setMessage({ type: "error", text: "Please enter a valid amount." })
      return Promise.reject(new Error("Invalid amount"))
    }
    setMessage(null)
    setIsProcessing(true)
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
            currency_code: "USD",
          },
        },
      ],
    })
  }

  const onApprove = (data: OnApproveData, actions: any) => {
    return actions.order.capture().then((details: any) => {
      setMessage({ type: "success", text: `Payment completed by ${details.payer.name.given_name}. Thank you!` })
      setIsProcessing(false)
    })
  }

  const onError = (err: any) => {
    setMessage({ type: "error", text: "An error occurred during the transaction. Please try again." })
    setIsProcessing(false)
    console.error("PayPal error:", err)
  }

  const onCancel = (data: Record<string, unknown>) => {
    setMessage({ type: "info", text: "Payment was cancelled." })
    setIsProcessing(false)
  }

  const MessageIcon = message?.type === "success" ? CheckCircle : message?.type === "error" ? AlertCircle : Terminal

  return (
    <PayPalScriptProvider options={{ clientId: paypalClientId, currency: "USD" }}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="payment-amount" className="sr-only">
            Amount (USD)
          </Label>
          <Input
            id="payment-amount"
            type="number"
            placeholder="Enter amount in USD"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            step="0.01"
            required
            className="h-14 text-xl text-center"
            disabled={isProcessing}
          />
        </div>

        {message && (
          <Alert variant={message.type === "error" ? "destructive" : "default"}>
            <MessageIcon className="h-4 w-4" />
            <AlertTitle>
              {message.type === "success" ? "Success" : message.type === "error" ? "Error" : "Info"}
            </AlertTitle>
            <AlertDescription>{message.text}</AlertDescription>
          </Alert>
        )}

        {isProcessing && (
          <div className="flex items-center justify-center text-gray-600">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <span>Processing payment...</span>
          </div>
        )}

        <div className={isProcessing ? "opacity-50 pointer-events-none" : ""}>
          <h3 className="text-lg font-semibold text-gray-700 mb-2 mt-6">2. Choose Payment Method</h3>
          <PayPalButtons
            style={{ layout: "vertical", color: "gold", shape: "pill", label: "paypal" }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            onCancel={onCancel}
            forceReRender={[amount]}
            disabled={!amount || isProcessing}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  )
}
