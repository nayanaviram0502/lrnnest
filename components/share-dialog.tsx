"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { QrCode, Copy, Instagram, PhoneIcon as WhatsApp, Share2 } from 'lucide-react'
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import QRCode from 'qrcode'

interface ShareDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  groupId: string
}

export function ShareDialog({ open, onOpenChange, groupId }: ShareDialogProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()
  const [shareUrl, setShareUrl] = useState<string>('')

  useEffect(() => {
    setShareUrl(`${window.location.origin}/groups/join/${groupId}`)
  }, [groupId])

  useEffect(() => {
    if (open && shareUrl) {
      setIsLoading(true)
      QRCode.toDataURL(shareUrl)
        .then(setQrCodeUrl)
        .catch(error => console.error('Error generating QR code:', error))
        .finally(() => setIsLoading(false))
    }
  }, [open, shareUrl])

  const copyLink = async () => {
    if (shareUrl) {
      await navigator.clipboard.writeText(shareUrl)
      toast({
        description: "Link copied to clipboard!",
      })
    }
  }

  const downloadQR = () => {
    if (qrCodeUrl) {
      const link = document.createElement("a")
      link.href = qrCodeUrl
      link.download = "group-qr-code.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const shareToSocial = (platform: string) => {
    if (!shareUrl) return

    const urls = {
      instagram: `instagram://share?text=Join my study group on LrnNest!&url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`Join my study group on LrnNest! ${shareUrl}`)}`,
      reddit: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=Join my study group on LrnNest!`
    }

    window.open(urls[platform as keyof typeof urls], '_blank')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Group Invitation</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          {isLoading ? (
            <div className="w-48 h-48 flex items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : qrCodeUrl && (
            <div className="p-4 bg-white rounded-lg">
              <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48" />
            </div>
          )}
          <div className="flex flex-wrap gap-2 justify-center">
            <Button onClick={copyLink} variant="outline" className="gap-2">
              <Copy className="h-4 w-4" /> Copy Link
            </Button>
            <Button onClick={downloadQR} variant="outline" className="gap-2" disabled={isLoading || !qrCodeUrl}>
              <QrCode className="h-4 w-4" /> Download QR
            </Button>
            <Button onClick={() => shareToSocial('instagram')} variant="outline" className="gap-2">
              <Instagram className="h-4 w-4" /> Instagram
            </Button>
            <Button onClick={() => shareToSocial('whatsapp')} variant="outline" className="gap-2">
              <WhatsApp className="h-4 w-4" /> WhatsApp
            </Button>
            <Button onClick={() => shareToSocial('reddit')} variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" /> Reddit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

