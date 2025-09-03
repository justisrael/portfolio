"use client"

import { useEffect } from "react"

// This component ensures modals work properly by adding necessary event listeners
export default function ModalProvider() {
  useEffect(() => {
    // Polyfill for dialog element if needed
    if (typeof window !== "undefined" && !window.HTMLDialogElement) {
      import("dialog-polyfill").then((module) => {
        const dialogPolyfill = module.default
        const dialogs = document.querySelectorAll("dialog")
        dialogs.forEach((dialog) => {
          dialogPolyfill.registerDialog(dialog)
        })
      })
    }
  }, [])

  return null
}
